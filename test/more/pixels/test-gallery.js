import { test } from 'tape-promise/tape';

import { userFacet, testFacet } from '../../../more/pixels/gallery';

import { insistPixelList } from '../../../more/pixels/types/pixelList';

const {
  changeColor,
  getColor,
  tapFaucet,
  transformToTransferAndUse,
  transformToPixel,
  getIssuers,
} = userFacet;

const { revokePixel, getCanvasSize } = testFacet;

const { pixelIssuer, useRightIssuer, transferRightIssuer } = getIssuers();

test('tapFaucet', t => {
  const pixelPayment = tapFaucet();
  const amount = pixelPayment.getBalance();
  const pixelAssay = pixelIssuer.getAssay();
  const quantity = pixelAssay.quantity(amount);
  t.doesNotThrow(() => insistPixelList(quantity, getCanvasSize()));
  t.end();
});

test('get exclusive pixel payment from faucet', t => {
  const payment = tapFaucet();
  pixelIssuer.getExclusiveAll(payment).then(pixelPayment => {
    const amount = pixelPayment.getBalance();
    const pixelAssay = pixelIssuer.getAssay();
    const quantity = pixelAssay.quantity(amount);
    t.doesNotThrow(() => insistPixelList(quantity, getCanvasSize()));
    t.end();
  });
});

test('the user changes the color of a pixel', async t => {
  // user actions
  const pixelPayment = tapFaucet();

  const exclusivePixelPayment = await pixelIssuer.getExclusiveAll(pixelPayment);
  const { useRightPayment } = await transformToTransferAndUse(
    exclusivePixelPayment,
  );
  const exclusiveUseRightPayment = await useRightIssuer.getExclusiveAll(
    useRightPayment,
  );
  const useRightAssay = exclusiveUseRightPayment.getIssuer().getAssay();

  const rawPixel = useRightAssay.quantity(
    exclusiveUseRightPayment.getBalance(),
  )[0];
  await changeColor(exclusiveUseRightPayment, '#000000');
  t.equal(getColor(rawPixel.x, rawPixel.y), '#000000');
  t.end();
});

// The user gives away the right to change the color (but not transfer the right to transfer the color) and guarantees that the right to change the color is exclusive. Even the original user cannot change the color unless they transfer the pixel back to themselves.
test('The user allows someone else to change the color but not the right to transfer the right to change the color', async t => {
  // user actions
  const pixelPayment = tapFaucet();

  const exclusivePixelPayment = await pixelIssuer.getExclusiveAll(pixelPayment);
  const {
    useRightPayment,
    transferRightPayment,
  } = await transformToTransferAndUse(exclusivePixelPayment);
  const exclusiveUseRightPayment = await useRightIssuer.getExclusiveAll(
    useRightPayment,
  );
  const exclusiveTransferRightPayment = await transferRightIssuer.getExclusiveAll(
    transferRightPayment,
  );
  const useRightAssay = exclusiveUseRightPayment.getIssuer().getAssay();

  const rawPixel = useRightAssay.quantity(
    exclusiveUseRightPayment.getBalance(),
  )[0];

  // TODO: send to other vat
  // other user below
  const otherUserPurse = useRightIssuer.makeEmptyPurse();
  const otherUserExclusiveUseRightPayment = await useRightIssuer.getExclusiveAll(
    exclusiveUseRightPayment,
  );
  await otherUserPurse.depositAll(otherUserExclusiveUseRightPayment);

  // ok until this line
  const payment = await otherUserPurse.withdrawAll();

  const exclusivePayment = await useRightIssuer.getExclusiveAll(payment);

  await changeColor(exclusivePayment, '#00000');

  t.equal(getColor(rawPixel.x, rawPixel.y), '#00000');

  // original user transforms the transfer right into a pixel to get
  // the color right back
  const pixelPayment2 = await transformToPixel(exclusiveTransferRightPayment);
  const exclusivePixelPayment2 = await pixelIssuer.getExclusiveAll(
    pixelPayment2,
  );
  const { useRightPayment: useRightPayment2 } = await transformToTransferAndUse(
    exclusivePixelPayment2,
  );
  const exclusiveUseRightPayment2 = await useRightIssuer.getExclusiveAll(
    useRightPayment2,
  );
  await changeColor(exclusiveUseRightPayment2, '#FFFFFF');
  t.equal(getColor(rawPixel.x, rawPixel.y), '#FFFFFF');

  // other user cannot color
  t.rejects(changeColor(exclusivePayment, '#00000'));
  t.end();
});

test('The user gives away their right to the pixel (right to transfer color rights) permanently', async t => {
  const pixelPurse = pixelIssuer.makeEmptyPurse();

  // user actions
  const pixelPayment = tapFaucet();
  const pixelAssay = pixelIssuer.getAssay();
  const rawPixel = pixelAssay.quantity(pixelPayment.getBalance())[0];
  const exclusivePixelPayment = await pixelIssuer.getExclusiveAll(pixelPayment);
  await pixelPurse.depositAll(exclusivePixelPayment);

  const newPayment = await pixelPurse.withdrawAll();

  // TODO: send over vat to other user

  const exclPaymentNewUser = await pixelIssuer.getExclusiveAll(newPayment);

  const { useRightPayment } = await transformToTransferAndUse(
    exclPaymentNewUser,
  );
  const exclusiveUseRightPayment = await useRightIssuer.getExclusiveAll(
    useRightPayment,
  );

  await changeColor(exclusiveUseRightPayment, '#00000');

  t.equal(getColor(rawPixel.x, rawPixel.y), '#00000');

  t.rejects(transformToTransferAndUse(newPayment));
  t.end();
});

test('The Gallery revokes the right to transfer the pixel or color with it', async t => {

  // user actions
  const pixelPayment = tapFaucet();
  const pixelAssay = pixelIssuer.getAssay();
  const rawPixel = pixelAssay.quantity(pixelPayment.getBalance())[0];
  const originalColor = getColor(rawPixel.x, rawPixel.y);
  const exclusivePixelPayment = await pixelIssuer.getExclusiveAll(pixelPayment);

  const {
    useRightPayment,
    transferRightPayment,
  } = await transformToTransferAndUse(exclusivePixelPayment);
  const exclusiveUseRightPayment = await useRightIssuer.getExclusiveAll(
    useRightPayment,
  );
  const exclusiveTransferRightPayment = await transferRightIssuer.getExclusiveAll(
    transferRightPayment,
  );

  // Gallery revokes
  revokePixel(rawPixel);

  // TODO: send over vat to other user

  t.rejects(changeColor(exclusiveUseRightPayment, '#00000'));
  // other user tries to get exclusive on the transfer right that was sent to
  // them.
  const otherUserTransferRightPayment = await transferRightIssuer.getExclusiveAll(
    exclusiveTransferRightPayment,
  );
  // this doesn't error but is empty
  const balance = otherUserTransferRightPayment.getBalance();

  t.deepEqual(balance.quantity, []);
  t.strictEqual(getColor(rawPixel.x, rawPixel.y), originalColor);

  t.end();
});

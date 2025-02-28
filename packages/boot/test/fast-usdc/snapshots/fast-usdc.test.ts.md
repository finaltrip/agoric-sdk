# Snapshot report for `test/fast-usdc/fast-usdc.test.ts`

The actual snapshot is saved in `fast-usdc.test.ts.snap`.

Generated by [AVA](https://avajs.dev).

## writes feed policy to vstorage

> Under "published", the "fastUsdc.feedPolicy" node is delegated to the general and chain-specific policies for the Fast USDC feed.
> The example below illustrates the schema of the data published there.
> 
> See also board marshalling conventions (_to appear_).

    [
      [
        'published.fastUsdc.feedPolicy',
        {
          chainPolicies: {
            Arbitrum: {
              attenuatedCttpBridgeAddresses: [
                '0xe298b93ffB5eA1FB628e0C0D55A43aeaC268e347',
              ],
              cctpTokenMessengerAddress: '0x19330d10D9Cc8751218eaf51E8885D058642E08A',
              chainId: 42161,
              confirmations: 2,
              rateLimits: {
                blockWindow: 20000000000n,
                blockWindowSize: 10,
                tx: 10000000000n,
              },
            },
            Base: {
              attenuatedCttpBridgeAddresses: [
                '0xB6615B2662b35fc3533F8479002e62D0523341De',
              ],
              cctpTokenMessengerAddress: '0x1682Ae6375C4E4A97e4B583BC394c861A46D8962',
              chainId: 8453,
              confirmations: 2,
              rateLimits: {
                blockWindow: 20000000000n,
                blockWindowSize: 10,
                tx: 10000000000n,
              },
            },
            Ethereum: {
              attenuatedCttpBridgeAddresses: [
                '0xBC8552339dA68EB65C8b88B414B5854E0E366cFc',
              ],
              cctpTokenMessengerAddress: '0xBd3fa81B58Ba92a82136038B25aDec7066af3155',
              chainId: 1,
              confirmations: 2,
              rateLimits: {
                blockWindow: 20000000000n,
                blockWindowSize: 10,
                tx: 10000000000n,
              },
            },
            Optimism: {
              attenuatedCttpBridgeAddresses: [
                '0x48C5417ED570928eC85D5e3AD4e7E0EeD7dB1E2A',
              ],
              cctpTokenMessengerAddress: '0x2B4069517957735bE00ceE0fadAE88a26365528f',
              chainId: 10,
              confirmations: 2,
              rateLimits: {
                blockWindow: 20000000000n,
                blockWindowSize: 10,
                tx: 10000000000n,
              },
            },
            Polygon: {
              attenuatedCttpBridgeAddresses: [
                '0x32cb9574650AFF312c80edc4B4343Ff5500767cA',
              ],
              cctpTokenMessengerAddress: '0x9daF8c91AEFAE50b9c0E69629D3F6Ca40cA3B3FE',
              chainId: 137,
              confirmations: 2,
              rateLimits: {
                blockWindow: 20000000000n,
                blockWindowSize: 10,
                tx: 10000000000n,
              },
            },
          },
          eventFilter: 'DepositForBurn(uint64,address,uint256,address,bytes32,uint32,bytes32,bytes32)',
          nobleAgoricChannelId: 'channel-21',
          nobleDomainId: 4,
        },
      ],
    ]

## writes fee config to vstorage

> Under "published", the "fastUsdc.feeConfig" node is delegated to the fee configuration for Fast USDC.
> The example below illustrates the schema of the data published there.
> 
> See also board marshalling conventions (_to appear_).

    [
      [
        'published.fastUsdc.feeConfig',
        {
          contractRate: {
            denominator: {
              brand: Object @Alleged: USDC brand {},
              value: 10n,
            },
            numerator: {
              brand: Object @Alleged: USDC brand {},
              value: 2n,
            },
          },
          flat: {
            brand: Object @Alleged: USDC brand {},
            value: 10000n,
          },
          variableRate: {
            denominator: {
              brand: Object @Alleged: USDC brand {},
              value: 100n,
            },
            numerator: {
              brand: Object @Alleged: USDC brand {},
              value: 1n,
            },
          },
        },
      ],
    ]

## writes account addresses to vstorage

> Under "published", the "fastUsdc" node is delegated to FastUSDC contract.
>     Note: published.fastUsdc.[settleAcctAddr], published.fastUsdc.[poolAcctAddr],
>     and published.fastUsdc.[intermediateAcctAddr] are published by @agoric/orchestration
>     via 'withOrchestration' and (local|cosmos)-orch-account-kit.js.
>     
> The example below illustrates the schema of the data published there.
> 
> See also board marshalling conventions (_to appear_).

    [
      [
        'published.fastUsdc',
        {
          poolAccount: 'agoric1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqp7zqht',
          settlementAccount: 'agoric1qyqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqc09z0g',
        },
      ],
      [
        'published.fastUsdc.agoric1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqp7zqht',
        {
          body: '#""',
          slots: [],
        },
      ],
      [
        'published.fastUsdc.agoric1qyqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqc09z0g',
        {
          body: '#""',
          slots: [],
        },
      ],
      [
        'published.fastUsdc.noble1test',
        {
          body: '#{"localAddress":"/ibc-port/icacontroller-1/ordered/{\\"version\\":\\"ics27-1\\",\\"controllerConnectionId\\":\\"connection-72\\",\\"hostConnectionId\\":\\"connection-40\\",\\"address\\":\\"noble1test\\",\\"encoding\\":\\"proto3\\",\\"txType\\":\\"sdk_multi_msg\\"}/ibc-channel/channel-1","remoteAddress":"/ibc-hop/connection-72/ibc-port/icahost/ordered/{\\"version\\":\\"ics27-1\\",\\"controllerConnectionId\\":\\"connection-72\\",\\"hostConnectionId\\":\\"connection-40\\",\\"address\\":\\"noble1test\\",\\"encoding\\":\\"proto3\\",\\"txType\\":\\"sdk_multi_msg\\"}/ibc-channel/channel-1"}',
          slots: [],
        },
      ],
    ]

## makes usdc advance

> Under "published", the "fastUsdc.txns" node is delegated to the Ethereum transactions upon which Fast USDC is acting.
> The example below illustrates the schema of the data published there.
> 
> See also board marshalling conventions (_to appear_).

    [
      [
        'published.fastUsdc.txns.0xc81bc6105b60a234c7c50ac17816ebcd5561d366df8bf3be59ff387552761702',
        {
          split: {
            ContractFee: {
              brand: Object @Alleged: USDC brand {},
              value: 302000n,
            },
            PoolFee: {
              brand: Object @Alleged: USDC brand {},
              value: 1208000n,
            },
            Principal: {
              brand: Object @Alleged: USDC brand {},
              value: 148490000n,
            },
          },
          status: 'DISBURSED',
        },
      ],
    ]

## writes pool metrics to vstorage

> Under "published", the "fastUsdc.poolMetrics" node is delegated to FastUSC LiquidityPool exo.
> The example below illustrates the schema of the data published there.
> 
> See also board marshalling conventions (_to appear_).

    [
      [
        'published.fastUsdc.poolMetrics',
        {
          encumberedBalance: {
            brand: Object @Alleged: USDC brand {},
            value: 0n,
          },
          shareWorth: {
            denominator: {
              brand: Object @Alleged: PoolShares brand {},
              value: 150000001n,
            },
            numerator: {
              brand: Object @Alleged: USDC brand {},
              value: 151208001n,
            },
          },
          totalBorrows: {
            brand: Object @Alleged: USDC brand {},
            value: 148490000n,
          },
          totalContractFees: {
            brand: Object @Alleged: USDC brand {},
            value: 302000n,
          },
          totalPoolFees: {
            brand: Object @Alleged: USDC brand {},
            value: 1208000n,
          },
          totalRepays: {
            brand: Object @Alleged: USDC brand {},
            value: 148490000n,
          },
        },
      ],
    ]

## skips usdc advance when risks identified

> Under "published", the "fastUsdc.txns" node is delegated to the Ethereum transactions upon which Fast USDC is acting.
> The example below illustrates the schema of the data published there.
> 
> See also board marshalling conventions (_to appear_).

    [
      [
        'published.fastUsdc.txns.0xc81bc6105b60a234c7c50ac17816ebcd5561d366df8bf3be59ff387552761702',
        {
          split: {
            ContractFee: {
              brand: Object @Alleged: USDC brand {},
              value: 302000n,
            },
            PoolFee: {
              brand: Object @Alleged: USDC brand {},
              value: 1208000n,
            },
            Principal: {
              brand: Object @Alleged: USDC brand {},
              value: 148490000n,
            },
          },
          status: 'DISBURSED',
        },
      ],
      [
        'published.fastUsdc.txns.0xd81bc6105b60a234c7c50ac17816ebcd5561d366df8bf3be59ff387552761799',
        {
          risksIdentified: [
            'TOO_LARGE_AMOUNT',
          ],
          status: 'ADVANCE_SKIPPED',
        },
      ],
    ]

## restart contract

> Under "published", the "fastUsdc.feeConfig" node is delegated to the updated fee configuration for Fast USDC after contract upgrade.
> The example below illustrates the schema of the data published there.
> 
> See also board marshalling conventions (_to appear_).

    [
      [
        'published.fastUsdc.feeConfig',
        {
          contractRate: {
            denominator: {
              brand: Object @Alleged: USDC brand {},
              value: 11n,
            },
            numerator: {
              brand: Object @Alleged: USDC brand {},
              value: 1n,
            },
          },
          flat: {
            brand: Object @Alleged: USDC brand {},
            value: 9999n,
          },
          variableRate: {
            denominator: {
              brand: Object @Alleged: USDC brand {},
              value: 100n,
            },
            numerator: {
              brand: Object @Alleged: USDC brand {},
              value: 3n,
            },
          },
        },
      ],
    ]

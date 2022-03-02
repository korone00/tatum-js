import { BlockchainTestData } from '../shared-testing'
import { ETH_TEST_DATA } from './eth.test-data'

export const KLAYTN_TEST_DATA: BlockchainTestData = {
  ...ETH_TEST_DATA,
  PROVIDER: 'https://public-node-api.klaytnapi.com/v1/cypress',
  MAINNET: {
    ...ETH_TEST_DATA.MAINNET,
    XPUB: 'xpub6EWe4UpMf7iFCMojMFpGWhCh8vJCcCF9RXp8kWuTQGz3weAKCDjQzabN9NNXsdWoC1M4S61ifpEVN6GRv1oiRHiA5P8Ds6aW9L3rXnccdvR',
    PRIVATE_KEY_0: '0x454524cdc5276ed1c25c4015a67d8815e3ef1f7ab9921290c9b760674b95082d',
    PRIVATE_KEY_100: '0x86f6a65db90c2d7c20bddd63d290ce75e4b3b1183164b9987c3208918db67d99',
    ADDRESS_0: '0xf60f9995b504ebce2cc3786c2b5787747aa7fcc0',
    ADDRESS_100: '0xd17330471a2d717a3c85087f78ae15ef4b05f8d7',
  },
  BLOCK_HASH: '0x2358278f8f1ede41ba5a6825f25ffa83799d1f83fd0338cb30db4cb4e6ae528b',
  BLOCK_HEIGHT: 83_871_427,
  TX_HASH: '0x3861fd5d489d6e39a3f1e9fcb430fb2e5da27d803bd22731c33fad3955d48168',
  TESTNET: {
    ...ETH_TEST_DATA.TESTNET,
    ERC_20: {
      CONTRACT_ADDRESS: '0x664f97470654e8f00e42433cffc0d08a5f4f7bc7',
      PRIVATE_KEY: '0x37b091fc4ce46a56da643f021254612551dbe0944679a6e09cb5724d3085c9ab',
      ADDRESS: '0x80d8bac9a6901698b3749fe336bbd1385c1f98f2',
    },
    MULTITOKEN: {
      CONTRACT_ADDRESS: '0x4bc2aee67e809be58422ee2174d83a1d1a61ea43',
      PRIVATE_KEY: '0x37b091fc4ce46a56da643f021254612551dbe0944679a6e09cb5724d3085c9ab',
      ADDRESS: '0x80d8bac9a6901698b3749fe336bbd1385c1f98f2',
    },
    ERC_721: {
      PRIVATE_KEY: '0d6c13fe5fed644dfa02512d4bffde9453dcb48873afb0b0a4c0cebce160c279',
      CONTRACT_ADDRESS: '0x2A42ae2a6346eEbC7FE2b2b7f02158634d5390dc',
    },
    PROVIDER: 'https://api.baobab.klaytn.net:8651/',
  },
}
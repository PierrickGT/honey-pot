import { isLocalOrUnknownNetwork } from './lib/web3-utils'

// IPFS endpoint
export const IPFS_ENDPOINT = isLocalOrUnknownNetwork()
  ? 'http://127.0.0.1:8080/ipfs'
  : 'https://ipfs.eth.aragon.network/ipfs'

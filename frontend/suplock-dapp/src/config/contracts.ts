// Contract addresses — update these after deploying to testnet via: supra move publish --network testnet
export const CONTRACT_ADDRESSES = {
  SUPLOCK:      '0xdce3ff2e6370630f906774423d2504d2f278908a5addebd691a7c2d892e1594a',
  CORE:         '0xdce3ff2e6370630f906774423d2504d2f278908a5addebd691a7c2d892e1594a',
  VESUPRA:      '0xdce3ff2e6370630f906774423d2504d2f278908a5addebd691a7c2d892e1594a',
  PRESERVE:     '0xdce3ff2e6370630f906774423d2504d2f278908a5addebd691a7c2d892e1594a',
  YIELD_VAULTS: '0xdce3ff2e6370630f906774423d2504d2f278908a5addebd691a7c2d892e1594a',
} as const;

export const RPC_URL  = 'https://rpc-testnet.supra.com';
export const CHAIN_ID = 6; // Supra Testnet
export const EXPLORER = 'https://testnet.suprascan.io';

// 1 SUPRA = 100,000,000 Quants (8 decimals)
export const toQuants   = (supra: number): number => Math.floor(supra * 1e8);
export const fromQuants = (q: number): number     => q / 1e8;

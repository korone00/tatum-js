/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TransferCustodialWalletBatchCelo = {
    /**
     * Blockchain to work with.
     */
    chain: TransferCustodialWalletBatchCelo.chain;
    /**
     * Address of custodial wallet to transfer from
     */
    custodialAddress: string;
    /**
     * Address of the token to transfer. Not valid for native address transfers.
     */
    tokenAddress?: Array<string>;
    /**
     * Type of the asset to transfer. 0 - ERC20, 1 - ERC721, 2 - ERC1155, 3 - native asset
     */
    contractType: Array<0 | 1 | 2 | 3>;
    /**
     * Blockchain address to send assets to
     */
    recipient: Array<string>;
    /**
     * Amount of the assets to be sent. Not valid for ERC-721 tokens.
     */
    amount?: Array<string>;
    /**
     * ID of token, if transaction is for ERC-721 or ERC-1155.
     */
    tokenId?: Array<string>;
    /**
     * Private key of sender address. Private key, or signature Id must be present.
     */
    fromPrivateKey: string;
    /**
     * Currency to pay for transaction gas
     */
    feeCurrency: TransferCustodialWalletBatchCelo.feeCurrency;
    /**
     * Nonce to be set to Ethereum transaction. If not present, last known nonce will be used.
     */
    nonce?: number;
    /**
     * Custom defined fee. If not present, it will be calculated automatically.
     */
    fee?: {
        /**
         * Gas limit for transaction in gas price.
         */
        gasLimit: string;
        /**
         * Gas price in Gwei.
         */
        gasPrice: string;
    };
}

export namespace TransferCustodialWalletBatchCelo {

    /**
     * Blockchain to work with.
     */
    export enum chain {
        CELO = 'CELO',
    }

    /**
     * Currency to pay for transaction gas
     */
    export enum feeCurrency {
        CELO = 'CELO',
        CUSD = 'CUSD',
        CEUR = 'CEUR',
    }


}
import { executeFunction } from "./utils";  
  
/**
 * Call DECIMAL() function of `StorageNodeRegistry` contract
 */
export async function getContractDecimal(network: string): Promise<number> {
    return await executeFunction(
        network,
        'DECIMAL',
        'Failed to get DECIMAL'
    );
}
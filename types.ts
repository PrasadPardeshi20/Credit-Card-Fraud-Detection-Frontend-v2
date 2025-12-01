export enum TransactionType {
  PAYMENT = 'PAYMENT',
  TRANSFER = 'TRANSFER',
  CASH_OUT = 'CASH_OUT',
  DEBIT = 'DEBIT',
  CASH_IN = 'CASH_IN'
}

export interface TransactionInput {
  step: number;
  type: TransactionType;
  amount: number;
  nameOrig?: string;
  oldbalanceOrg: number;
  newbalanceOrig: number;
  nameDest?: string;
  oldbalanceDest: number;
  newbalanceDest: number;
}

export interface PredictionResult {
  isFraud: boolean;
  probability: number;
  riskLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  timestamp: string;
}

export interface BatchResultItem extends TransactionInput {
  id: string;
  prediction: PredictionResult;
}

export interface DashboardStats {
  totalTransactions: number;
  fraudDetected: number;
  totalAmountProcessed: number;
  modelAccuracy: number;
}
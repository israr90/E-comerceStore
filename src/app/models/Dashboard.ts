import { User } from './User';

export class Dashboard {
  public TotalTransections: number;
  public CompletedTransections: number;
  public InCompletedTransections: number;
  public TotalIDoc: number;
  public TotalBene: number;
  public TotalAmount: number;
  public CreditLimitStartDate: string;
  public CreditLimitEndDate: string;
  public TotalAmountSent90Days: number;
  public TotalTransactionSent90Days: number;
  public AvailableCreditLimit90Days: number;
  public TotalCreditLimit90Days: number;

  constructor() {
    this.CompletedTransections = 0;
    this.InCompletedTransections = 0;
    this.TotalAmount = 0;
    this.TotalBene = 0;
    this.TotalTransections = 0;
    this.TotalIDoc = 0
    this.TotalAmount = 0;
    this.CreditLimitStartDate = '';
    this.CreditLimitEndDate = '';
    this.TotalAmountSent90Days = 0
    this.TotalTransactionSent90Days = 0
    this.TotalCreditLimit90Days = 0;
    this.AvailableCreditLimit90Days = 0;
  }
}



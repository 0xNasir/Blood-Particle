export class Donor {
  donorId: string;
  donorName: string;
  donorEmail: string;
  donorPhone: string;
  donorBloodGroup: string;
  donorBirthDate: string;
  donorLocation: DonorAddress;
  donationHistory: DonationHistory[];
}

export class DonorAddress {
  donorDivision: string;
  donorDistrict: string;
  donorThana: string;
  donorArea: string;
  donorPostalCode: string;
}

export class DonationHistory {
  historyId: string;
  historyDate: string;
  historyDonationType: string;
  historyLocation: string;
}

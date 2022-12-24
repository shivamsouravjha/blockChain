import * as Controller from './index';
const fs = require('fs');

export default class TransactionController extends Controller {
  constructor(response) {
    super(response);
    this.service = new ReportService();
  }
}
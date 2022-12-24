import * as Controller from './index';
const fs = require('fs');

export default class UserController extends Controller {
  constructor(response) {
    super(response);
    this.service = new ReportService();
  }
}
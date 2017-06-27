export default class Wrapper {
  constructor(service) {
    this.service = service;
  }
  get() { return this.service; }
  override(service) {
    this.service = service;
  }
}

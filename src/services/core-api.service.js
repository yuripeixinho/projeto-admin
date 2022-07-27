import api from "./api.service";

export default class CoreApiService {
  constructor(_parentEndpoint, _endpoint, _serializer) {
    this.parentEndpoint = _parentEndpoint;
    this.endpoint = _endpoint;
    this.serializer = _serializer;
  }

  async read(id) {
    const response = await api.get(`${this.endpoint}/${id}`);
    const data = response.data;

    return this.serializer.fromJson(data);
  }

  async list() {
    const response = await api.get(`${this.endpoint}`);
    const data = response.data;

    return this.serializer.fromJson({ response: data });
  }

  async create(item) {
    debugger;
    const response = await api.post(
      `${this.endpoint}`,
      this.serializer.toJson(item)
    );
    const data = response.data;

    return data;
  }

  async update(item, isFormDate = false) {
    const response = await api.put(
      `${this.endpoint}/${item.id}`,
      isFormDate
        ? this.serializer.toFormData(item)
        : this.serializer.toJson(item)
    );

    const data = response.data;
    return data;
  }

  async delete(id) {
    const response = await api.delete(`${this.endpoint}/${id}`);
    const data = response.data;

    return data;
  }
}

interface ResponseData<T> {
  messge: string;
  code: Number;
  data: {
    [key: string]: T;
  };
}

type LoginParamsVerification = {
  account: Array<{
    required: true;
    message: string;
    trigger: string;
  }>;

  password: Array<{
    required: true;
    message: string;
    trigger: string;
  }>;
};
type RegisterParamsVerification = {
  account: Array<{
    required: true;
    message: string;
    trigger: string;
  }>;

  email: Array<{
    required: true;
    message: string;
    trigger: string;
  }>;

  password: Array<{
    required: true;
    message: string;
    trigger: string;
  }>;
};

export interface Reactive {
  loginParams: {
    account: string;
    password: string;
  };
  loginParamsVerification: LoginParamsVerification;
  registerParamsVerification: RegisterParamsVerification;
  registerParams: {
    account: string;
    password: string;
    email: string;
  };
}

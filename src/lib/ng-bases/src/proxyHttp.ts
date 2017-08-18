export interface IProxyHttp {
    get<T>(api: string, params: any): ng.IHttpPromise<any>;
    post<T>(api: string, params: any): ng.IHttpPromise<any>;
    form<T>(api: string, form: any): ng.IHttpPromise<any>;
}

export interface ISgResult<T> {
    code: number;
    msg: string;
    data: T;
}

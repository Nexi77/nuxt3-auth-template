export interface ApiModel {
    get<T>(url: string, params?: Record<string, any>): Promise<T>
    post<T>(url: string, body?: Record<string, any>): Promise<T>
    put<T>(url: string, body?: Record<string, any>): Promise<T>
    delete<T>(url: string, params?: Record<string, any>): Promise<T>
    setHeader(headers: Record<string, string>): void
    deleteHeader(headerName: string): void;
}

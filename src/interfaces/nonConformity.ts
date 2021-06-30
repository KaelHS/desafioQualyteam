export interface INonConformity {
    id: number;
    title: string;
    description?: string;
    "ocurrence-date": string;
    departments: Array<number>;
    'corrective-actions'?: Array<number>
}
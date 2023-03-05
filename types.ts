export interface IQuestion {
    id:        number;
    title:     string;
    subtitle:  string;
    image_uri: string;
    uri:       string;
    order:     number;
}

export interface ICategories {
    data: Datum[];
    meta: Meta;
}

export interface ICategory {
    id:          number;
    name:        string;
    createdAt:   string;
    updatedAt:   string;
    publishedAt: string;
    title:       string;
    rank:        number;
    image:       Image;
}

export interface Image {
    id:                number;
    name:              string;
    alternativeText:   null;
    caption:           null;
    width:             number;
    height:            number;
    formats:           null;
    hash:              string;
    ext:               string;
    mime:              string;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          string;
    provider_metadata: null;
    createdAt:         string;
    updatedAt:         string;
}

export interface Meta {
    pagination: Pagination;
}

export interface Pagination {
    page:      number;
    pageSize:  number;
    pageCount: number;
    total:     number;
}

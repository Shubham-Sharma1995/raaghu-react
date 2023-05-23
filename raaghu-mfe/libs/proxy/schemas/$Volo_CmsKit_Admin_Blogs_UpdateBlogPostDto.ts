/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Volo_CmsKit_Admin_Blogs_UpdateBlogPostDto = {
    properties: {
        title: {
            type: 'string',
            isRequired: true,
            maxLength: 64,
        },
        slug: {
            type: 'string',
            isRequired: true,
            maxLength: 256,
            minLength: 2,
        },
        shortDescription: {
            type: 'string',
            isNullable: true,
            maxLength: 256,
        },
        content: {
            type: 'string',
            isNullable: true,
            maxLength: 2147483647,
        },
        coverImageMediaId: {
            type: 'string',
            isNullable: true,
            format: 'uuid',
        },
        concurrencyStamp: {
            type: 'string',
            isNullable: true,
        },
    },
} as const;
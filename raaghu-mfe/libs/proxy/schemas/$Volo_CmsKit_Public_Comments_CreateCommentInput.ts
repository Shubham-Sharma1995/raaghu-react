/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Volo_CmsKit_Public_Comments_CreateCommentInput = {
    properties: {
        text: {
            type: 'string',
            isRequired: true,
            maxLength: 512,
        },
        repliedCommentId: {
            type: 'string',
            isNullable: true,
            format: 'uuid',
        },
    },
} as const;
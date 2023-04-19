import React from 'react';
import RdsCompDatatable from '../rds-comp-data-table';
import { useTranslation } from 'react-i18next';

export interface RdsCompPagesProps {
   tableHeaders: {
      displayName: string;
      key: string;
      datatype: string;
      dataLength?: number;
      required?: boolean;
      sortable?: boolean;
      colWidth?: string;
      disabled?: boolean;
      isEndUserEditing?: boolean;
   }[];
   actions?: {
      displayName: string;
      id: string;
   }[];
   tableData?: any[];
   pagination?: boolean;
   recordsPerPage?: number;
   onActionSelection?(rowData: any, actionId: any): void;
}

const RdsCompPages = (props: RdsCompPagesProps) => {
   const { t } = useTranslation();
   return (
      <RdsCompDatatable
      actionPosition="right"
         tableHeaders={props.tableHeaders}
         actions={props.actions}
         tableData={props.tableData!}
         pagination={props.pagination!}
         recordsPerPage={props.recordsPerPage}
         onActionSelection={props.onActionSelection!}
      ></RdsCompDatatable>
   );

};

export default RdsCompPages;
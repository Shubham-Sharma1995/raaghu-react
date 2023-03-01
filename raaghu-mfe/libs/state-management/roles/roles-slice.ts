import {
    createSlice,
    createAsyncThunk,
    PayloadAction,
    AnyAction,
  } from "@reduxjs/toolkit";
  import {ServiceProxy} from '../../shared/service-proxy'
  
  type InitialState = {
    roles: any;
    permission:any;
    error: string;
    status: "pending" | "loading" | "error" | "success";
  };
  export const initialState: InitialState = {
    roles: [],
    permission:[],
    error: "",
    status: "pending",
  };
  const proxy = new ServiceProxy()
  //Roles unit
  export const fetchRoles = createAsyncThunk(
    "Roles/fetchRoles",
  async  () => {
       return proxy.rolesGET3(undefined, undefined,0,1000).then(
        (result:any)=>{
            console.log('fetched data , ',result.items  )
          return result.items

        }
      ); 
    }
  );
  export const addRolesUnit = createAsyncThunk(
    "Roles/addRolesUnit",
    async (dto: any) => {
       const result = await proxy.rolesPOST(dto);
      return result;
    }
  );
  export const editRoles = createAsyncThunk(
    "Roles/editRoles",
    async ({ id, dTo }: { id: any; dTo: any }) => {
      console.log('dTo from slice ',dTo )
      const result = await proxy.rolesPUT2(id, dTo);
      return result;
    }
  );
  
  export const deleteRoles = createAsyncThunk(
    "Roles/deleteRoles",
    async (id: any) => {
      const result = await proxy.rolesDELETE2(id);
      return result;
    }
  );
 
  //permissionsGET
  export const fetchPermission = createAsyncThunk(
    "Roles/fetchPermission",
  async  (key:any) => {
       return proxy.permissionsGET('R' , key).then(
        (result:any)=>{
            console.log('fetched data , ',result  )
          return result.groups

        }
      ); 
    }
  );

  //permissionsPUT
  export const editPermisstion = createAsyncThunk(
    "Roles/editPermisstion",
    async ({ key, dTo }: { key: any; dTo: any }) => {
      const result = await proxy.permissionsPUT('R', key,dTo);
      return result;
    }
  );
  const RolesSlice = createSlice({
    name: "Roles",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
      //Roles unit reducer
      builder.addCase(fetchRoles.pending, (state) => {
        state.status = "loading";
      });
      builder.addCase(
        fetchRoles.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.status = "success";
          state.roles = action.payload;
          state.error = "";
        }
      );
      builder.addCase(fetchRoles.rejected, (state, action) => {
        state.status = "error";
        state.roles = [];
        state.error = action.error.message || "Something went wrong";
      });
      builder.addCase(deleteRoles.pending, (state) => {
        state.status = "loading";
      });
      builder.addCase(
        deleteRoles.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.status = "success";
          state.roles = action.payload;
          state.error = "";
        }
      );
      builder.addCase(deleteRoles.rejected, (state, action) => {
        state.status = "error";
        state.roles = [];
        state.error = action.error.message || "Something Went Wrong";
      });
      builder.addCase(editRoles.pending, (state) => {
        state.status = "loading";
      });
      builder.addCase(
        editRoles.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.status = "success";
          state.roles = action.payload;
          state.error = "";
        }
      );
      builder.addCase(editRoles.rejected, (state, action) => {
        state.status = "error";
        state.roles = [];
        state.error = action.error.message || "Something Went Wrong";
      });
      //permission
      builder.addCase(fetchPermission.pending, (state) => {
        state.status = "loading";
      });
      builder.addCase(
        fetchPermission.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.status = "success";
          state.permission = action.payload;
          state.error = "";
        }
      );
      builder.addCase(fetchPermission.rejected, (state, action) => {
        state.status = "error";
        state.permission = [];
        state.error = action.error.message || "Something went wrong";
      });
      builder.addCase(editPermisstion.pending, (state) => {
        state.status = "loading";
      });
      builder.addCase(
        editPermisstion.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.status = "success";
          state.permission = action.payload;
          state.error = "";
        }
      );
      builder.addCase(editPermisstion.rejected, (state, action) => {
        state.status = "error";
        state.permission = [];
        state.error = action.error.message || "Something Went Wrong";
      });
    }
  });
  export default RolesSlice.reducer;
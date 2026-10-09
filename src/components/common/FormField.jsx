import { TextField, MenuItem } from "@mui/material";

const FormField = ({ name, register, errors, options, ...rest }) => (
  <TextField
    {...register(name)}
    {...rest}
    select={!!options}
    defaultValue={options ? "" : undefined}
    variant="standard"
    fullWidth
    error={!!errors[name]}
    helperText={errors[name]?.message}
    sx={{ py: 1.5 }}
  >
    {options?.map((o) => (
      <MenuItem key={o} value={o}>{o}</MenuItem>
    ))}
  </TextField>
);

export default FormField;
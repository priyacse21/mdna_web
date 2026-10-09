import { TextField, MenuItem } from "@mui/material";

const FormField = ({ name, register, field, errors, options, ...rest }) => {
  const { ref, ...fieldProps } = field ?? register(name);

  return (
    <TextField
      {...fieldProps}
      {...rest}
      inputRef={ref}
      select={!!options}
      {...(!field && { defaultValue: options ? "" : undefined })}
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
};

export default FormField;
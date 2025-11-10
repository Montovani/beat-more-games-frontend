import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Search() {
  return (
    <>
      <Box
        sx={{
          "& > :not(style)": { m: 1, width:{xs:'50%',sm:'45ch',} },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white",
            },
            "&:hover fieldset": {
              borderColor: "#ac2847",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#ac2847",
            },
          },
          "& .MuiInputLabel-root": {
            color: "white",
          },
          "& .MuiInputBase-input": {
            color: "white",
          },
        }}
      >
        <TextField
          className="search-input"
          id="filled-basic"
          label="Search Your Game"
          variant="outlined"
        />
      </Box>
      <div style={{display:'flex',flexWrap:'wrap',marginTop:'20px'}}>
      <Form.Select className="search-selector">
        <option> Platform</option>
        <option value="PS5">PS5</option>
        <option value="Xbox">Xbox</option>
        <option value="PC">PC</option>
        <option value="Nintendo Switch">Nintendo Switch</option>
        <option value="Nintendo Switch">Nintendo Switch</option>
      </Form.Select>
      <Form.Select className="search-selector-2">
        <option> Genre</option>
        <option value="Action">Action</option>
        <option value="RPG">RPG</option>
        <option value="Strategy">Strategy</option>
        <option value="Horror">Horror</option>
        <option value="Survivor">Survivor</option>
      </Form.Select>
      <Form.Select className="search-selector-3">
        <option> Publisher</option>
        <option value="Electronic Arts">Electronic Arts</option>
        <option value="Activision">Activision</option>
        <option value="CD Project Red">CD Project Red</option>
        <option value="Fromsoftware">Fromsoftware</option>
        <option value="Epic Games">Epic Games</option>
      </Form.Select>
      <Button className="search-btn" variant="light">Search</Button>
      </div>

    </>
  );
}

export default Search;

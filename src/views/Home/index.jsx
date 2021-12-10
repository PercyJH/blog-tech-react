import { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import { HistoryCard } from "../../components";
import { list } from "../../services/user";

const Home = () => {
  // paso 1 declarar una función donde debo almacenar a los usuarios que saco del api
  const [ users, setUsers ] = useState([]);
  
  const fetchUsers = async () => {
    const response = await list();
    setUsers(response.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        {users &&
          users.map((user) => (
            <Grid item xs={12} sm={6}>
              <HistoryCard user={user} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default Home;
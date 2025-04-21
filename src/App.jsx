import { useState } from "react";
import { Button, Heading, Flex, View, Grid, Divider } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

export default function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [userProfile] = useState({
    id: "profile-1",
    email: "antonette.penn@example.com",
    profileOwner: "Antonette Penn"
  });

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  return (
    <Flex 
      className="App" 
      justifyContent="center" 
      alignItems="center" 
      direction="column" 
      width="70%" 
      margin="0 auto"
    >
      <Heading level={1}>My Profile - Antonette Penn</Heading>
      <Divider />
      
      {showProfile && (
        <Grid 
          margin="3rem 0" 
          autoFlow="column" 
          justifyContent="center" 
          gap="2rem" 
          alignContent="center"
        >
          <Flex 
            key={userProfile.id} 
            direction="column" 
            justifyContent="center" 
            alignItems="center" 
            gap="2rem" 
            border="1px solid #ccc" 
            padding="2rem" 
            borderRadius="5%" 
            className="box"
          >
            <View>
              <Heading level="3">{userProfile.email}</Heading>
            </View>
          </Flex>
        </Grid>
      )}
      
      <Button onClick={toggleProfile}>
        {showProfile ? "Hide Profile" : "Show Profile"}
      </Button>
    </Flex>
  );
}
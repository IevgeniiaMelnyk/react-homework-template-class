import { data } from "data/users";
import { Section } from "./Section/Section";
import { User } from "./User/User";
import { UsersList } from "./UsersList/UsersList";

export const App = () => {
  return (
    <div>
      <Section>
        <User user={data[0]} />
      </Section>
      <Section title="List of users">
        <UsersList users={data}/>
      </Section>
      
    </div>
  );
};

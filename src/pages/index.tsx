import { API, Auth, Hub, graphqlOperation } from 'aws-amplify';
import { Base } from '../templates/Base';
import { createUser } from '../graphql/mutations';

Hub.listen('auth', async (data) => {
    const event = data.payload.event;
    console.log('event:', event);

    if (event === 'confirmSignUp') {
        const user = await Auth.currentAuthenticatedUser();

        let data = await API.graphql(graphqlOperation(createUser, { input: { user_email: user.attributes.email } }));
        console.log(data)
    }
});

const Index = () => <Base />;

export default Index;

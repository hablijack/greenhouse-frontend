export default function ({ $auth, $axios, $config }) {
    if ($auth.loggedIn && !$auth.user.id) {
        console.log($auth.user);
    } else {
        console.log("error on user login");
    }
};

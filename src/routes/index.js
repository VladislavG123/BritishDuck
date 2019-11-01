import MainPage from '../components/MainPage.vue'
import PersonalAccount from '../components/PersonalAccount.vue'
import Repeat from '../components/Repeat.vue'


const routes = [{
        path: '/',
        name: 'MainPage',
        component: MainPage
    },
    {
        path: '/account',
        name: 'Account',
        component: PersonalAccount
    },
    {
        path: '/repeat',
        name: 'Repeat',
        component: Repeat
    },
]

export default routes;
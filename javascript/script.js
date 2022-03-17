const app = new Vue ({
    el: '#app',
    data: {
        activeIndex : 0,
        arrChats: [
            {
                user: {
                    name: 'Michele',
                    image: 'img/avatar_1.jpg',
                },
                arrMessages: [
                    {
                        text:'Hai portato a spasso il cane?',
                        time:'',
                        sent: true,
                    },
                    {
                        text:'Ricordi di stendere i panni',
                        time:'',
                        sent: true,
                    },
                    {
                        text:'Tutto Fatto!',
                        time:'',
                        sent: false,
                    },
                ]
            },
            {
                user: {
                    name: 'Fabio',
                    image: 'img/avatar_2.jpg',
                },
                arrMessages: [
                    {
                        text:'',
                        time:'',
                        sent: true,
                    },
                    {
                        text:'',
                        time:'',
                        sent: true,
                    },
                    {
                        text:'',
                        time:'',
                        sent: true,
                    },
                ]
            },
            {
                user: {
                    name: 'Samuele',
                    image: 'img/avatar_3.jpg',
                },
                arrMessages: [
                    {
                        text:'',
                        time:'',
                        sent: true,
                    },
                    {
                        text:'',
                        time:'',
                        sent: true,
                    },
                    {
                        text:'',
                        time:'',
                        sent: true,
                    },
                ]
            },
            {
                user: {
                    name: 'Alessandro B.',
                    image: 'img/avatar_4.jpg',
                },
                arrMessages: [
                    {
                        text:'',
                        time:'',
                        sent: true,
                    },
                    {
                        text:'',
                        time:'',
                        sent: true,
                    },
                    {
                        text:'',
                        time:'',
                        sent: true,
                    },
                ]
            },
            {
                user: {
                    name: 'Alessandro L.',
                    image: 'img/avatar_5.jpg',
                },
                arrMessages: [
                    {
                        text:'',
                        time:'',
                        sent: true,
                    },
                    {
                        text:'',
                        time:'',
                        sent: true,
                    },
                    {
                        text:'',
                        time:'',
                        sent: true,
                    },
                ],
            },
        ],
    },
    methods:
    {
        changeSelected(index) {
            this.activeIndex = index;
        },
    }
});
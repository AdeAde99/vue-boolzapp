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
                newMessage: '',
                arrMessages: [
                    {
                        text:'Hai portato a spasso il cane?',
                        time:'2022-01-06T12:00:30',
                        sent: true,
                    },
                    {
                        text:'Ricordi di stendere i panni',
                        time:'2022-01-06T12:01:30',
                        sent: true,
                    },
                    {
                        text:'Tutto Fatto!',
                        time:'2022-01-06T12:02:30',
                        sent: false,
                    },
                ]
            },
            {
                user: {
                    name: 'Fabio',
                    image: 'img/avatar_2.jpg',
                },
                newMessage: '',
                arrMessages: [
                    {
                        text:'Esci il cane',
                        time:'2022-01-06T12:03:30',
                        sent: true,
                    },
                    {
                        text:'Dai acqua alle piante',
                        time:'2022-01-06T12:04:30',
                        sent: true,
                    },
                    {
                        text:'Sarà fatto',
                        time:'2022-01-06T12:05:30',
                        sent: false,
                    },
                ]
            },
            {
                user: {
                    name: 'Samuele',
                    image: 'img/avatar_3.jpg',
                },
                newMessage: '',
                arrMessages: [
                    {
                        text:'Ciao come stai?',
                        time:'2022-01-06T12:06:30',
                        sent: true,
                    },
                    {
                        text:'Ciao',
                        time:'2022-01-06T12:07:30',
                        sent: true,
                    },
                    {
                        text:'Bene',
                        time:'2022-01-06T12:08:30',
                        sent: false,
                    },
                ]
            },
            {
                user: {
                    name: 'Alessandro B.',
                    image: 'img/avatar_4.jpg',
                },
                newMessage: '',
                arrMessages: [
                    {
                        text:'Ciao',
                        time:'2022-01-06T12:09:30',
                        sent: true,
                    },
                    {
                        text:'Come va!?',
                        time:'2022-01-06T12:10:30',
                        sent: true,
                    },
                    {
                        text:'Tutto a posto',
                        time:'2022-01-06T12:11:30',
                        sent: false,
                    },
                ]
            },
            {
                user: {
                    name: 'Alessandro L.',
                    image: 'img/avatar_5.jpg',
                },
                newMessage: '',
                arrMessages: [
                    {
                        text:'Ciao',
                        time:'2022-01-06T12:12:30',
                        sent: true,
                    },
                    {
                        text:'cosa vuoi mangiare stasera?',
                        time:'2022-01-06T12:13:30',
                        sent: true,
                    },
                    {
                        text:'La pizza',
                        time:'2022-01-06T12:14:30',
                        sent: false,
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

        addMessage() {
            const activeChat = this.arrChats[this.activeIndex];
            const message = {
                text: activeChat.newMessage,
                date: '',
                sent: true
            };
            activeChat.arrMessages.push(message);
            activeChat.newMessage = '';

            this.okDopoUnSecondo();
        },

        okDopoUnSecondo() {
            setTimeout(this.addOk, 1000);
        },
        addOk() {
            const activeChat = this.arrChats[this.activeIndex];
            const message = {
                text: 'ok',
                date:'',
                sent: false
            };
            activeChat.arrMessages.push(message);
        },
    },

});
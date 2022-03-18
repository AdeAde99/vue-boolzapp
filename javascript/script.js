const app = new Vue ({
    el: '#app',
    data: {
        wordToSearch: '',
        activeIndex : 0,
        arrChats: [
            {
                user: {
                    trovato : false,
                    visible: true,
                    name: 'Michele',
                    image: 'img/avatar_1.jpg',
                },
                newMessage: '',
                lastMessage: '',
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
                    trovato : false,
                    visible: true,
                    name: 'Fabio',
                    image: 'img/avatar_2.jpg',
                },
                newMessage: '',
                lastMessage: '',
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
                    trovato : false,
                    visible: true,
                    name: 'Samuele',
                    image: 'img/avatar_3.jpg',
                },
                newMessage: '',
                lastMessage: '',
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
                    trovato : false,
                    visible: true,
                    name: 'Alessandro B.',
                    image: 'img/avatar_4.jpg',
                },
                newMessage: '',
                lastMessage: '',
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
                    trovato : false,
                    visible: true,
                    name: 'Alessandro L.',
                    image: 'img/avatar_5.jpg',
                },
                newMessage: '',
                lastMessage: '',
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

        search() {
            this.arrChats.forEach(chat => {
                const parola = this.wordToSearch;

                let arrName = Array.from(chat.user.name);
                console.log(arrName);
                for (i = 0; i < arrName.length; i++) {
                    const tagliato = arrName.slice(i, i + parola.length);
                    console.log(tagliato);

                    const stringa = tagliato.join('');

                    console.log(stringa);

                    if (parola == stringa) {
                        chat.user.trovato = true;
                    }
                };
                if (chat.user.trovato == true) {
                    chat.user.visible = true;
                } else {
                    chat.user.visible = false;
                }
                chat.user.trovato = false;
            });
        },

        removeMessage(index) {

            this.arrChats[this.activeIndex].arrMessages.splice(index, 1);
        },

        getLastMessage() {
            

        }
    },

    updated() {
        this.search();
    },

    mounted() {
        this.getLastMessage();
    }

});
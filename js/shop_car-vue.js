$(function () {

    var array = [
        {
            img: "images/car-1.jpg",
            price: "7390",
            number: 1,
            check: false,
            p: "原始原素北欧简约全实木沙发贵妃客厅转角白橡木布艺沙发组合家具",
            span: "原木色+三人位+分体坐垫小脚踏"
        },
        {
            img: "images/car-2.jpg",
            price: "3771",
            number: 1,
            check: false,
            p: "全实木沙发组合 松木三人沙发椅 布艺客厅中式木质沙发床实木家具",
            span: "原木色+三人位"
        },
        {
            img: "images/car-3.jpg",
            price: "1460",
            number: 1,
            check: false,
            p: "源氏木语进口白橡木实木沙发自由组合可拆洗垫子美式乡村客厅家具",
            span: "原木色框架+三人位"
        },
        {
            img: "images/car-4.jpg",
            price: "6299",
            number: 1,
            check: false,
            p: "喜梦宝实木沙发客厅茶几电视柜 简约田园实木布艺沙发薇娅",
            span: "单人位+三人位+茶几+电视柜"
        },
        {
            img: "images/car-5.jpg",
            price: "4280",
            number: 1,
            check: false,
            p: "地中海田园沙发 美式乡村布艺棉麻实木 拆洗简约欧式客厅沙发",
            span: "三人位+分体坐垫小脚踏"
        },
    ];

    var app = new Vue({
        el: "#app",
        data: {
            allCheck: false,
            count: 0,
            list: array,
        },
        methods: {
            plus: function (item) {
                item.number++;
            },
            sub: function (item) {
                if (item.number <= 1) {
                    return;
                }
                item.number--;
            },
            inputNumber: function (item) {
                item.number = item.number.replace(/\D/g, "");
                if (item.number <= 1) {
                    item.number = 1;
                }
            },
            itemCheck: function (item) {
                item.check = !item.check;
                if (item.check) {
                    this.count++;
                } else {
                    this.count--;
                }
                if (this.count == this.list.length) {
                    this.allCheck = true;
                } else {
                    this.allCheck = false;
                }
            },
            allCheckClick: function (item) {
                console.log(item)
                this.allCheck = !this.allCheck;
                for (var i = 0; i < this.list.length; i++) {
                    if (this.allCheck == true) {
                        this.list[i].check = true;
                    } else {
                        this.list[i].check = false;
                    }
                }

                if (this.allCheck) {
                    this.count = this.list.length;
                } else {
                    this.count = 0;
                }
            },
            deleteClick: function (item) {
                var index = this.list.indexOf(item);
                if (index != -1) {
                    this.list.splice(index, 1);
                    if (item.check == true) {
                        this.count--;
                    }

                }
                if (this.count == 0) {
                    this.allCheck = false;
                }
            },
            clearClick: function () {
                for (var i = 0; i < this.list.length; i++) {
                    if (this.list[i].check) {
                        this.list.splice(i, 1);
                        this.count--;
                        i = -1;
                    }
                }
                if (this.count == 0) {
                    this.allCheck = false;
                }
            },

        },
        computed: {
            totalPrice: function () {
                var temp = 0;
                for (var i = 0; i < this.list.length; i++) {
                    if (this.list[i].check) {
                        temp += (this.list[i].price * this.list[i].number)
                    }
                }
                return temp;
            }
        },


    });

    $(".fang").on("click", function () {
        var index = $(this).attr("index");
        if ($($(".fang")[index]).hasClass("duigou")) {
            $($(".fang")[index]).removeClass("duigou");
        } else {
            $($(".fang")[index]).addClass("duigou");
        }
    });

})


























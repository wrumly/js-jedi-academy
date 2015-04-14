define(
    ["backbone"],

    function(Backbone) {
        var Controller = Backbone.Router.extend({
            routes: {
                "": "home",
                "home": "home",
                "lesson1": "lesson1",
                "lesson2": "lesson2"
            },

            home: function () {
                $(".g-view").addClass('hidden');
                $("#home").removeClass('hidden');
                $('nav li').removeClass('active');
                $('nav li a[href=\"' + location.hash + '\"]').closest('li').addClass('active');
            },

            lesson1: function () {
                $(".g-view").addClass('hidden');
                $("#lesson1").removeClass('hidden');
                $('nav li').removeClass('active');
                $('nav li a[href=\"' + location.hash + '\"]').closest('li').addClass('active');
            },

            lesson2: function () {
                $(".g-view").addClass('hidden');
                $("#lesson2").removeClass('hidden');
                $('nav li').removeClass('active');
                $('nav li a[href=\"' + location.hash + '\"]').closest('li').addClass('active');
            }
        });

        var controller = new Controller(); // ������ ����������

        Backbone.history.start();  // ��������� HTML5 History push
    }
);
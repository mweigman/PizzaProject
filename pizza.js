var sizePrice = 0;
var meatTotal = 0;
var veggieTotal = 0;

$(document).ready(function () {

        //events

        $(".nav-link").click(showTab);

        $("input[name=size]").change(size).first().change();

        $("input[name=crust]").change(crustType).first().change();

        $("input[name=meats]").change(meatType);

        $("input[name=veggies]").change(veggieType);

        $("input[name=deliveryInfo]").change(displayDelivery);

        $(".nav-link").click(calculation);

        //functions

        function showTab(event) {
            event.preventDefault();
            $(this).tab("show");

        }

        function size() {
            var sizeType = $("input[name=size]:checked").val();

            sizePrice = $(this).data("size-price");

            $("#sizeOutput").text(sizeType);
            $("#spOutput").text(sizePrice.toFixed(2));

        }

        function crustType() {

            var crustType = $("input[name=crust]:checked").val();

            $("#crustOutput").text(crustType);
        }

        function meatType() {

            meatTotal = 0;
            var meatNames = "";

            var meatType = $("input[name=meats]:checked");

            meatType.each(function () {
                meatNames += $(this).val();
                meatNames += " ";
                meatTotal += $(this).data("price");
            })

            //display
            $("#meatNameOutput").text(meatNames);
            $("#meatPriceOutput").text(meatTotal.toFixed(2));

        }

        function veggieType() {

            veggieTotal = 0;
            var veggieNames = "";

            //finding all the checked boxes
            var veggieType = $("input[name=veggies]:checked");

            //data-price mathematics
            veggieType.each(function () {
                veggieNames += $(this).val();
                veggieNames += " ";
                veggieTotal += $(this).data("price");
            })

            //display
            $("#veggieNameOutput").text(veggieNames);
            $("#veggiePriceOutput").text(veggieTotal.toFixed(2));

        }

        function displayDelivery(){

            var deliveryInfo = "";
            //finding all the checked boxes
            var checkDelivery = $("input[name=deliveryInfo]");

            //data-price mathematics
            checkDelivery.each(function (){
                deliveryInfo += $(this).val();
                deliveryInfo += "<br>";
            })
            //Display
            $("#deliveryOutputs").html(deliveryInfo);

        }

        function calculation(){

            //calculation
            var subTotal = sizePrice + meatTotal + veggieTotal;
            var salesTax = subTotal * 0.051;
            var deliveryFee = 2;
            var total = subTotal + salesTax + deliveryFee;

            //output
            $("#subTotalOutput").text(subTotal.toFixed(2));
            $("#salesTaxOutput").text(salesTax.toFixed(2));
            $("#deliveryFeeOutput").text(deliveryFee.toFixed(2));
            $("#totalOutput").text(total.toFixed(2));
        }


    }
);


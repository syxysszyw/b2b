	$(function(){
        $(".requiredStar").each(function(){
            var $required = $("<em>*</em>");
            $(this).prepend($required);
        });

        $("input[required='required']").on("focus", function(){
            if($(this).val() == ""){
                $(this).css("border", "1px solid #ccc");
            }
        });

        $("input[required='required']").on("blur", function(){
            if($(this).val() == ""){
                $(this).css("border", "1px solid red");
            }
        });

        function fInputValidation(cla){
            var valid = true;
            $(cla).each(function(){
                if($(this).val() == ""){
                    // 如果不要弹出框就注释下面三行代码
                    var $label = $(this).prev('label').text();
                    $label = $label.substring(1);
                    alert("请输入"+$label);
                    $(this).focus();
                    valid = false;
                    return valid;
                }
            });
            return valid;
        }


        $("#submitBtn").on("click", function(){
            var valid = fInputValidation("input[required='required']");
            if(valid){
                $("form").submit();
            }
        });
        

        $('#searchBtn').on('click', function(){
            var $target = $(".b2b_right_bottom_table");
            if($target.is(':hidden')){
                $target.css('display', 'block');
            }
        });
 
        $(".freeze").on("click", function(){
            $_this = $(this);
            $freezeVal = $_this.text();
            $(".freeze_confirm").on("click", function(){
                if($freezeVal == "冻结"){
                    $_this.removeClass("btn-danger").addClass("btn-success");
                    $(".alert_content").text("确认要恢复该用户吗？");
                    $_this.text("恢复");
                    $_this.parent().siblings('.tr_status').text("冻结");
                }else{
                    $_this.removeClass("btn-success").addClass("btn-danger");
                    $(".alert_content").text("确认要冻结该用户吗？")
                    $_this.text("冻结");
                    $_this.parent().siblings('.tr_status').text("有效");
                }
            });
        });
    });
 
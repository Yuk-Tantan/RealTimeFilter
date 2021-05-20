$(function(){
    // テキストボックスでキーアップされた時に実行
    $('.search__text').keyup(function(){
      // テキストボックスの内容を保存
      search__text = $(".search__text").val();
      // ul内のliをすべて取得してループ
      $('.target li').each(function(){
        val = $(this).text();
        if (val.match(search__text)) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
    });
  });
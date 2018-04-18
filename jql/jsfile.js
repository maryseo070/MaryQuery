
  function initialize () {
    let $ul = $maryQuery("ul");
    $ul.append("<li>HI</li>")
  }
// $maryQuery(() => { console.log("boop") });
$maryQuery(() => { initialize(); });

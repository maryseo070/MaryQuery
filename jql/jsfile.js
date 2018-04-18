
document.addEventListener("DOMContentLoaded", function(event) {
   deleteTodo();
   completed();
 });

function createTodo() {
  $maryQuery(".addTodo").on("submit", e => {
    e.preventDefault();
    let todo = document.querySelectorAll(".todoBody")[0].value;
    if (todo) {
      $maryQuery(".todos").append(`
        <div>
        <li>${todo}</li>
          <button class="deleteTodo">Delete to-do</button>
          <input type="button" class="completed" value="Not Completed.."></input>
        </div>
        `);
    }
    document.querySelectorAll(".todoBody")[0].value = '';

    $maryQuery(".deleteTodo").on("click", e => {
      $maryQuery(e.target).parent("li").remove();
    });

    $maryQuery(".completed").on("click", e => {
      let value = e.target.value;
      value === "Completed!" ? e.target.setAttribute("value", "Not Completed..")  : e.target.setAttribute("value", "Completed!")
    });

  });
}


function deleteTodo(e) {

  // $maryQuery(".deleteTodo").click(function(e) {
  //     $maryQuery(e.target).parent("li").remove();
  // })

  // debugger
  $maryQuery(".deleteTodo").on("click", e => {
    $maryQuery(e.target).parent("li").remove();
  });
}

function completed(e) {
  $maryQuery(".completed").on("click", e => {
    e.target.value === "Completed!" ? e.target.setAttribute("value", "Not Completed..")  : e.target.setAttribute("value", "Completed!")
  });
}


function initialize () {
  createTodo();
}
// $maryQuery(() => { console.log("boop") });
$maryQuery(() => { initialize(); });

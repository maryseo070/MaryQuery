document.addEventListener("DOMContentLoaded", function(event) {
  $maryQuery(".todos").append(`
    <div>
    <li>Buy Milk
      <button class="deleteTodo" style="font-family: Courier">Delete to-do</button>
      <input type="button" class="completed" value="Not Completed.." style="font-family: Courier"></input>
      </li>
    </div>
    `)
    $maryQuery(".deleteTodo").on("click", e => {
      $maryQuery(e.target).parent("li").remove();
    });

    $maryQuery(".completed").on("click", e => {
      let value = e.target.value;
      value === "Completed!" ? e.target.setAttribute("value", "Not Completed..")  : e.target.setAttribute("value", "Completed!")
      $maryQuery(e.target).toggleClass("done");
      $maryQuery(e.target.parentElement).toggleClass("parent-done")
    });
  });



function createTodo() {
  $maryQuery(".addTodo").on("submit", e => {
    e.preventDefault();
    let todo = document.querySelectorAll(".todoBody")[0].value;
    if (todo) {
      $maryQuery(".todos").append(`
        <div>
        <li>${todo}
          <button class="deleteTodo" style="font-family: Courier">Delete to-do</button>
          <input type="button" class="completed" value="Not Completed..!" style="font-family: Courier"></input>
          </li>
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
      $maryQuery(e.target).toggleClass("done");
      $maryQuery(e.target.parentElement).toggleClass("parent-done")

    });

  });
}



function initialize () {
  createTodo();
}

$maryQuery(() => { initialize(); });

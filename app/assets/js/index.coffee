$ -> #when the page is ready
  $.get "/persons", (persons) -> # Get request which gets persons from the database and puts it into a list called persons
    $.each persons, (index, person) ->
      $('#persons').append $("<li>").text person.name
      # Finds the DOM element called persons and goes through the persons list and for each person, adds a new line with the person's name

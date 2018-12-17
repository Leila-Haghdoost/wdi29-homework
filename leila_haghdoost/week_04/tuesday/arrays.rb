# 1. Create an array of the days of the week
# Create a variable named days_of_the_week as an array of the following:
# Monday
# Tuesday
# Wednesday
# Thursday
# Friday
# Saturday
# Sunday



days_of_the_week = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
p "#{days_of_the_week}"

# 2. My calendar says the first day is Sunday...
# Remove Sunday from the last postion and move it to the first position. Use array methods.
days_of_the_week.pop
p "#{days_of_the_week}"


days_of_the_week.unshift("Sunday")
p days_of_the_week


# 3. Create a new array of the days of the week:
# The first inner array should be the weekdays
# The second inner array should be the weekend days

new_days_of_the_week =[
  ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  ["Saturday", "Sunday"]
]
p new_days_of_the_week


# 4. Remove either the weekdays or the weekends
# Your choice...
new_days_of_the_week.delete_at(1)
p new_days_of_the_week


# 5. Sort the remaining days alphabetically
new_days_of_the_week.flatten!.sort!
p new_days_of_the_week


#In general, methods that end in ! indicate that the method will modify the object it's called on. Ruby calls these as "dangerous methods" because they change state that someone else might have a reference to.

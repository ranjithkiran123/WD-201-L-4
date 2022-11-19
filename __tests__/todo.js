/* eslint-disable no-undef */
const todoList = require("../todo");
const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

describe("Todo List Test Suite", () => {
  beforeAll(() => {
    const this_game = new Date();
    const some_game = 86400000;
    [
      {
        title: "testing1",
        completed: false,
        dueDate: new Date(today.getTime() - oneday).toLocaleDateString(
          "en-CA"
        ),
      },
      {
        title: "testing2",
        completed: false,
        dueDate: new Date().toLocaleDateString("en-CA"),
      },
      {
        title: "testing3",
        completed: false,
        dueDate: new Date(today.getTime() + oneday).toLocaleDateString(
          "en-CA"
        ),
      },
    ].forEach(add);
  });
  test("checking creation of new todo", () => {
    expect(all.length).toEqual(3);
    add({
      title: "come lets play",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toEqual(4);
  });

  test("checks marking a todo completetion", () => {
    expect(all[0].completed).toEqual(false);
    markAsComplete(0);
    expect(all[0].completed).toEqual(true);
  });

  test("checks the retrieval of over due items", () => {
    expect(overdue().length).toEqual(1);
  });

  test("checks the retrieval of due today items", () => {
    expect(dueToday().length).toEqual(2);
  });

  test("checks the retrieval of due later items", () => {
    expect(dueLater().length).toEqual(1);
  });
});
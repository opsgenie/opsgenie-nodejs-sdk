const mockedRestApiGet = jest.fn();
const alertV2 = require("./AlertV2");

jest.mock("../restApi.js", () => {
  const original = jest.requireActual("../restApi.js");
  return {
    ...original,
    get: mockedRestApiGet,
  };
});

describe("AlertV2", () => {
  test.todo("should call api with correct params on get");
  test.todo("should call api with correct params on create");
  test.todo("should call api with correct params on delete");
  test.todo("should call api with correct params on getRequestStatus");
  test("should call api with correct params on list", () => {
    // sanity check
    expect(mockedRestApiGet).toHaveBeenCalledTimes(0);

    const identifier = undefined;
    const config = undefined;
    const callback = jest.fn();

    // call the method
    alertV2().list(identifier, config, callback);
    // check api is called
    expect(mockedRestApiGet).toHaveBeenCalledTimes(1);
    // check api is called with correct parameters
    expect(mockedRestApiGet).toHaveBeenCalledWith(
      "/v2/alerts/",
      undefined,
      callback
    );
  });
  test.todo("should call api with correct params on acknowledge");
  test.todo("should call api with correct params on close");
  test.todo("should call api with correct params on addNote");
  test.todo("should call api with correct params on unacknowledge");
  test.todo("should call api with correct params on snooze");
  test.todo("should call api with correct params on escalateToNext");
  test.todo("should call api with correct params on assign");
  test.todo("should call api with correct params on addTeam");
  test.todo("should call api with correct params on addTags");
  test.todo("should call api with correct params on removeTags");
  test.todo("should call api with correct params on addDetails");
  test.todo("should call api with correct params on removeDetails");
  test.todo("should call api with correct params on executeAction");
  test.todo("should call api with correct params on listAlertRecipients");
  test.todo("should call api with correct params on listAlertLogs");
  test.todo("should call api with correct params on listAlertNotes");
  test.todo("should call api with correct params on getSavedSearch");
  test.todo("should call api with correct params on createSavedSearch");
  test.todo("should call api with correct params on updateSavedSearch");
  test.todo("should call api with correct params on listSavedSearches");
});

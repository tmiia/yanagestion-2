export const READER_QUERY = `*[
  _type == "reader"
]{
  paragraphs
}`;

export const FOLDER_QUERY = `*[
  _type == "folder"
]{
  order,
  title,
  description,
  contents[]->{
    title,
    content
  },
  addContactForm
}`;
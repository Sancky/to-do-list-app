import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function ManageListItem({
	item,
	handleList,
	edit,
	remove,
	description
}) {
	function removeItemList() {
		return handleList((list) =>
			list.filter((element) => element.id !== item.id)
		);
	}

	function editItemList() {
		return handleList((list) =>
			list.map((element) =>
				element.id === item.id
					? { ...element, isEditing: !item.isEditing }
					: element
			)
		);
	}

	function saveItemDescription(e) {
		if (!e.target.value.length || e.key !== "Enter") return;

		const description = e.target.value;

		return handleList((list) =>
			list.map((element) =>
				element.id === item.id
					? { ...element, description: description, isEditing: false }
					: element
			)
		);
	}

	if (edit) {
		return (
			<>
				<FontAwesomeIcon
					icon={faGear}
					className="text-slate-900 cursor-pointer"
					onClick={editItemList}
				/>
			</>
		);
	}

	if (remove) {
		return (
			<>
				<FontAwesomeIcon
					icon={faXmark}
					className="text-slate-900 cursor-pointer"
					onClick={removeItemList}
				/>
			</>
		);
	}

	if (description) {
		return (
			<>
				{!item.isEditing ? (
					<div className="bg-slate-600 text-slate-900 font-light text-1xl text-left break-all mr-4 cursor-default select-none">
						{item.description}
					</div>
				) : (
					<input
						className="bg-slate-600 text-slate-900 font-light text-1xl text-left w-full mr-4 outline-none selection:bg-slate-800 selection:text-slate-600"
						defaultValue={item.description}
						onKeyDown={saveItemDescription}
                        name="edit-description"
					></input>
				)}
			</>
		);
	}
}

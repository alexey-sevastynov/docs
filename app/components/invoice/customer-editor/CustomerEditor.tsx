import { useContext } from "react";
import { MyContext } from "@/app/components/MyContext";
import { Button } from "@/shared/ui/button/Button";

export function CustomerEditor() {
    const {
        setCustomerName,
        customerName,
        customerNames,
        activeInputEdit,
        setInputActivEdit,
        setCustomerNames,
        setOrder,
        order,
    } = useContext(MyContext);

    const addItemToArrNames = () => {
        const newId = customerNames.length > 0 ? customerNames[customerNames.length - 1].id + 1 : 1;
        setCustomerNames([...customerNames, { name: customerName, id: newId }]);
        alert(`Ви добавили нову назву ${customerName}`);
        setInputActivEdit(!activeInputEdit);
        setOrder([...order, { name: customerName, id: newId }]);
    };

    const removeItemInArrNames = (targetName: string) => {
        if (
            customerNames.length > 1 &&
            targetName !== "?" &&
            targetName !== 'ПП "НПФ СВК"' &&
            targetName !== 'ТОВ ВКФ "Інватех"'
        ) {
            const objDelete = customerNames.find((item) => item.name === targetName);
            if (objDelete) {
                const objFilter = customerNames.filter((item) => item.id !== objDelete.id);
                setCustomerNames(objFilter);
                alert(`Ви видалили назву ${targetName}`);
            }
        }
    };

    return (
        <div className="title">
            <p className="bold">Платник</p>

            {activeInputEdit ? (
                <>
                    <select
                        className="select-tac"
                        value={customerName}
                        name="name"
                        onChange={(e) => setCustomerName(e.target.value)}
                    >
                        {customerNames.map((item) => (
                            <option key={item.id} value={item.name}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                    <Button
                        onClick={() => setInputActivEdit(!activeInputEdit)}
                        className="img__edit"
                        iconName="edit"
                    />
                    <Button
                        onClick={() => removeItemInArrNames(customerName)}
                        className="img__del"
                        iconName="trash"
                    />
                </>
            ) : (
                <>
                    <input
                        className="input-tac"
                        type="text"
                        onChange={(e) => setCustomerName(e.target.value)}
                        value={customerName}
                    />
                    <Button onClick={addItemToArrNames} className="img__accept" iconName="check" />
                    <Button
                        onClick={() => setInputActivEdit(!activeInputEdit)}
                        className="img__close"
                        iconName="close"
                    />
                </>
            )}
        </div>
    );
}

import React, { ChangeEvent, useState } from "react";
import { Container } from './styles';

const DEPARTAMENTOS = ["Qualidade", "Gerência", "Vendas"];

export const DepartmentCheckbox = () => {
  const [expanded, setExpanded] = useState(false);
  const [selections, setSelections] = useState<Array<string>>([]);

  const toggleExpanded = () => {
    if (!expanded) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      return setSelections([...selections, event.target.name]);
    }
    const filtered = selections.filter(name => name !== event.target.name);
    return setSelections(filtered);
  };

  return (
      <>
      <Container>
        <div onClick={toggleExpanded}>
          <div
            className={`font-semibold cursor-pointer ${
              expanded ? "up-arrow" : "down-arrow"
            }`}
          >
            {selections.length
              ? selections.map((name, i) => (
                  <span key={i}>
                    {i ? ", " : null}
                    {name}
                  </span>
                ))
              : "Nenhum selecionado"}
          </div>
        </div>
        {expanded && (
          <div className="border-gray-200 border border-solid">
            {DEPARTAMENTOS.map(platform => (
              <label htmlFor="one" key={platform}>
                <input
                  type="checkbox"
                  name={platform}
                  value={platform}
                  onChange={handleChange}
                  className="m-3 cursor-pointer"
                />
                {platform}
              </label>
            ))}
          </div>
        )}
      </Container>
    </>
  );
};


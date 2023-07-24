export default function SectionSummary() {
    return (
      <section className="grid grid-cols-2 gap-4">
        {/* Div com 4 cards à direita */}
        <div className="col-span-1">
          <div className="grid grid-cols-2 gap-4">
            {/* Card 1 */}
            <div className="bg-white p-4 rounded shadow">
              {/* Conteúdo do Card 1 */}
              <h3>Card 1</h3>
              <p>Conteúdo do Card 1</p>
            </div>
  
            {/* Card 2 */}
            <div className="bg-white p-4 rounded shadow">
              {/* Conteúdo do Card 2 */}
              <h3>Card 2</h3>
              <p>Conteúdo do Card 2</p>
            </div>
  
            {/* Card 3 */}
            <div className="bg-white p-4 rounded shadow">
              {/* Conteúdo do Card 3 */}
              <h3>Card 3</h3>
              <p>Conteúdo do Card 3</p>
            </div>
  
            {/* Card 4 */}
            <div className="bg-white p-4 rounded shadow">
              {/* Conteúdo do Card 4 */}
              <h3>Card 4</h3>
              <p>Conteúdo do Card 4</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  